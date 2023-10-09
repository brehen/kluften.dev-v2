<script lang="ts">
	import Saos from 'saos'
	export let maxW = 'max-w-prose'
</script>

<Saos animation={'swing-in-bottom-bck 0.2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true}>
	<section class="flex justify-center w-full">
		<div class={'flex p-1.5 w-full md:w-3/4 md:rounded-xl ' + maxW}>
			<div
				class="overflow-hidden w-full rounded-2xl border-2 border-b-[10px] border-l-[17px] border-primary-900 bg-white dark:bg-surface-700"
			>
				<slot />
			</div>
		</div>
	</section>
</Saos>
