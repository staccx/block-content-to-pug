import { getImageUrl } from "@sanity/block-content-to-hyperscript/internals";

function renderChildren(props, divider = " ") {
  return Array.isArray(props.children)
    ? props.children.join(divider)
    : props.children;
}

function block(props) {
  const style = props.node.style || "normal";
  switch (style) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return `${style} ${renderChildren(props)}`;
    case "normal":
      if (props.children.length === 1 && !props.children[0]) {
        return renderChildren(props);
      }
      return `p ${renderChildren(props)}`;
    case "blockquote":
      return `blockquote ${hardBreak()} | ${renderChildren(props)}`;
    default:
      return renderChildren(props);
  }
}

function RawPugSerializer(char, props) {
  return `#[${char} ${renderChildren(props)}]`;
}

function link(props) {
  const { href, title } = props.mark;
  const linkTitle = title ? ` ${JSON.stringify(title)}` : "";
  return `#[a(href='${href}') ${renderChildren(props)}${linkTitle}]`;
}

function list(props) {
  const prefix = props.type === "number" ? "ol" : "ul";
  return `${prefix} \n${renderChildren(props)}`;
}

function listItem(props) {
  const indentation = new Array((props.node.level || 1) + 1).join("  ");
  return `\n${indentation}li ${renderChildren(props)}`;
}

function image(props) {
  const { title, alt } = props;
  const url = getImageUrl(props);
  const imgTitle = title ? ` ${JSON.stringify(title)}` : "";
  return `img(src='${url}' alt='${alt}' title='${imgTitle}')`;
}

function container(props) {
  return renderChildren(props, "\n\n");
}

function hardBreak() {
  return "  \n";
}

export default {
  types: {
    block,
    image,
  },

  marks: {
    "strike-through": RawPugSerializer.bind(null, "strike"),
    em: RawPugSerializer.bind(null, "em"),
    code: RawPugSerializer.bind(null, "code"),
    strong: RawPugSerializer.bind(null, "strong"),
    underline: RawPugSerializer.bind(null, "u"),
    link,
  },

  list,
  listItem,
  container,
  hardBreak,
  markFallback: renderChildren,
};
