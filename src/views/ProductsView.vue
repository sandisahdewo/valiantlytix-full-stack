<template>
    <div class="md:px-[15rem] mt-4">
		<p v-if="isLoading" class="text-center">Loading...</p>
        <div v-if="!isLoading" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
			<div v-for="product in products" :key="product.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<img class="rounded-t-lg object-cover h-48 w-96" :src="product.thumbnail" :alt="product.title" />
				</a>
				<div class="p-5">
					<span class="border border-white rounded-full px-3 py-1 text-sm text-white font-semibold">{{ product.brand }}</span>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
					
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ product.description }}</p>
					<button @click="detailProduct(product.id)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Detail
						<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			products: {},
			isLoading: false
		}
	},
	methods: {
		getProducts() {
			this.isLoading = true

			fetch('https://dummyjson.com/products')
				.then(response => response.json())
				.then(data => {
					this.isLoading = false
					this.products = data.products
				})
				.catch(err => {
					this.isLoading = false
				})
		},
		detailProduct(id) {
			this.$router.push({name:'detail-product', params: {id}})
		}
	},
	mounted() {
		this.getProducts()
	}
}
</script>