<script setup lang="ts">
import { useRepositoryContext } from '@/repository'

const { auth } = useRepositoryContext()
</script>

<template>
	<pre>auth factory {{ auth }}</pre>
	<h4 class="text-red-900 font-semibold">Auth Page</h4>
</template>
