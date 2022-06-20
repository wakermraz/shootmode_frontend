<template>
    <div class="location-button">
        <img src="/assets/img/location-icon.svg">
        <span>Melbourne, Australia</span>
        <img src="/assets/img/chevron-right-gray-icon.svg">
    </div>
</template>

    <script>
export default {
    name: 'LocationBtn'
}
</script>


<style scoped>
    .location-button {
        background: #FFFFFF;
        border: 1px solid #E8E7E7;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
        border-radius: 40px;
        display: flex;
        gap: 8px;
        padding: 14px 12px 14px 20px;
        justify-content: center;
        align-items: center;
    }
</style>
