<template>
  <div class="rich">
    <RichTextRenderer
      :document="props.richText"
      :nodeRenderers="renderNodes()"
      :markRenderers="renderMarks()"
    />
  </div>
</template>
<script setup lang="ts">
// @ts-ignore
import RichTextRenderer from "contentful-rich-text-vue-renderer";
import { h } from "vue";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const props = defineProps({
  richText: {
    type: Object,
    required: true,
  },
});

// Contentful Rich Text
function renderMarks() {
  return {
    // @ts-ignore
    [MARKS.BOLD]: (text, key) => h("strong", { key }, text),
  };
}

function renderNodes() {
  return {
    // @ts-ignore
    [BLOCKS.PARAGRAPH]: (node, key, next) =>
      h("p", { key }, next(node.content, key, next)),
  };
}
</script>
<style lang="sass" >
$std-fs: #{fluid(16px, 25px)}
.rich > p 
  font-family: $main-font
  font-size: $std-fs
  color: $font-color
  line-height: 120%
  margin-bottom: 20px

.rich > ul 
  margin-bottom: 20px
  padding-left: 20px

  li 
    font-family: $main-font
    font-size: $std-fs
    color: $font-color
    line-height: 120%
</style>
