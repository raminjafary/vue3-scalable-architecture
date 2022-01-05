<script setup lang="ts">
import { useRepositoryProvider } from '@/repository'

useRepositoryProvider()
</script>
<template>
	go to /auth
	<router-view></router-view>
</template>
