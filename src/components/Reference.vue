<script>
export default {
    name: "Reference",
    props: {
        link: String,
    }
}
</script>

<template>
    <li>
        <a :href="link" target="_blank">
            <strong>
                <slot></slot>
            </strong>
        </a>
    </li>
</template>