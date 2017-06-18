<template>
<div class="component-view">
    <slot name="source"></slot>
    <div class="meta">
        <div class="description">
            <slot></slot>
        </div>
        <slot name="highlight"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'component-view'
}
</script>
