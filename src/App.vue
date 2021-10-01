<script setup lang="ts">
import { useRepositoryProvider } from '@/repository'

useRepositoryProvider()
</script>
<template>
	<!-- You should not add anything to this component! -->
	go to /auth
	<router-view></router-view>
</template>
