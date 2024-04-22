<script>
import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
import KnowledgeClips from "$lib/organisms/knowledgeClips.svelte";

export let data
</script>

<Breadcrumb titel="Kennisclips" bgc="var(--vtSec-LightBlue)" />
<KnowledgeClips data={data}/>
