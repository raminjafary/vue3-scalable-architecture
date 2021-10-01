import { provide, inject } from 'vue'
import axios from '@/api'
import repositoryContainer from '@/repositories'
import type { IAuth } from '@/repositories/auth/types'

interface Service {
	auth: IAuth
}

export const RepositoryIdentifier = Symbol('api repositories')

export function useRepositoryProvider() {
	provide(RepositoryIdentifier, repositoryContainer(axios))
}

export function useRepositoryContext() {
	return inject(RepositoryIdentifier) as Service
}
