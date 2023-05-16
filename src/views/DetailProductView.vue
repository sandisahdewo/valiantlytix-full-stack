<template>
    <div class="px-3 md:px-[15rem] mt-4">
		<p v-if="isLoading" class="text-center">Loading...</p>
        <div v-if="!isLoading">
            <a href="#" class="flex flex-col rounded-lg shadow md:flex-row border-gray-700 bg-gray-800 hover:bg-gray-700 px-4 py-5">
                <Splide :options="{ rewind: true }" class="w-[21rem] md:w-96" aria-label="Detail products images">
                    <SplideSlide v-for="(image, key) in product.images" :key="key">
                        <img :src="image" alt="Image" class="object-cover h-96 rounded-t-lg">
                    </SplideSlide>
                </Splide>
                <div class="flex flex-col p-4 leading-normal">
                    <div><span class="border border-white rounded-full px-3 py-1 text-sm text-white font-semibold">{{ product.brand }}</span></div>
                    <h5 class="text-2xl font-bold tracking-tight text-white">{{ product.title }}</h5>
                    <div class="text-white text-sm mb-2">
                        Rating {{ product.rating }} • Stock {{ product.stock }} • Category {{ product.category }}
                    </div>
                    <div class="mb-2">
                        <span class="text-white text-3xl font-bold">${{ product.price }}</span>
                        <span v-if="product.discountPercentage" class="bg-red-100 text-red-400 text-xs rounded px-1 ml-1">{{ product.discountPercentage }}%</span>
                    </div>
                    <p class="mb-3 font-normal text-gray-400">{{ product.description }}</p>
                </div>
            </a>

        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			product: {},
			isLoading: false
		}
	},
	methods: {
		findProduct(id) {
			this.isLoading = true

			fetch(`https://dummyjson.com/products/${id}`)
				.then(response => response.json())
				.then(data => {
					this.isLoading = false
					this.product = data
				})
				.catch(err => {
					this.isLoading = false
				})
		}
	},
    mounted() {
        this.findProduct(this.$route.params.id)
    }
}
</script>