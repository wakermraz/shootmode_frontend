<template>
    <div class="header-search-wrapper">
        <div class="search-input">
            <img src="/assets/img/search-icon.svg">
            <input type="text" name="header-search" placeholder="Search" class="header-search">
        </div>
        <span class="search-example">e.g. <font>Camera</font>, <font>Lenses</font>, <font>Lighting</font>, <font>Audio equipment</font>, <font>Rigs</font></span>
    </div>
</template>

<script>
export default {
    name: 'SearchInput'
}
</script>


<style scoped>
    .search-input {
        position: relative;
        min-width: 472px;
    }
    .header-search {
        background: #F7F7F7;
        border-radius: 40px;
        padding: 14px 20px 14px 48px;
        width: 100%;
        border: 0;
        outline: 0;
        font-size: 20px;
        height: 48px;
        font-family: 'Roobert';
    }

    .header-search::placeholder {
        color: #00000052;
    }

    .search-input>img {
        position: absolute;
        top: 14px;
        left: 20px;
    }

    .header-search-wrapper>span {
        font-size: 14px;
    }

    .search-example {
        font-family: 'Tarnac';
        font-weight: 400;
        color: rgba(0, 0, 0, 0.32);
    }

    .search-example>font {
        color: rgba(0, 0, 0, 0.64);
        text-decoration: underline;
    }
</style>
