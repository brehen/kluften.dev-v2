<script lang="ts">
  import Saos from 'saos'
</script>

<Saos animation={'swing-in-bottom-bck 0.2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true}>
	<section class="flex justify-center w-full">
		<div class="flex p-1.5 w-full max-w-prose md:w-3/4 md:rounded-xl">
			<div
				class="overflow-hidden w-full rounded-2xl border-2 border-b-[10px] border-l-[17px] border-primary-900 bg-surface-200-700-token"
			>
				<slot />
			</div>
		</div>
	</section>
</Saos>
