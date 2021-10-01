<script setup lang="ts">
import { useRepositoryContext } from '@/repository'
import { ref } from '@vue/reactivity'

let { auth } = useRepositoryContext()
</script>

<template>
	<h4 class="text-red-900 font-semibold">Auth Page</h4>
</template>
