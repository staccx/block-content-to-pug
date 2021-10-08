import {
  blocksToNodes,
  getImageUrl,
  getSerializers,
  mergeSerializers,
} from "@sanity/block-content-to-hyperscript/internals";

import pSerializers from "./serializers";

const renderNode = (render, props, childNodes) => {
  const children = childNodes || (props.node && props.node.children);
  return render(Object.assign({}, props, { children }));
};

const { defaultSerializers, serializeSpan } = getSerializers(renderNode);
const pugSerializers = mergeSerializers(defaultSerializers, pSerializers);

const toPug = (
  block,
  options = {
    serializers: {},
    projectId: "",
    dataset: "",
  }
) => {
  const blocks = block || [];
  const serializers = mergeSerializers(
    pugSerializers,
    options.serializers || {}
  );
  const props = Object.assign({}, options, {
    blocks,
    serializers,
    listNestMode: "last-child",
  });
  return blocksToNodes(
    renderNode,
    props,
    defaultSerializers,
    serializeSpan
  ).trim();
};

// Expose default serializers to the user
toPug.defaultSerializers = defaultSerializers;

// Expose logic for building image URLs from an image reference/node
toPug.getImageUrl = getImageUrl;

export default toPug;
