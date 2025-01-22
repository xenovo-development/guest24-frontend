<template>
  <div>
    <BreadcrumbOne
      :activePageName="$t('breadcrumb.contact')"
      :title="$t('breadcrumb.contact')"
      backgroundUrl="/img/slider.jpg"
    />
    <Contact />
  </div>
</template>
<script>
export default {
  name: "ContactPage",
};
</script>
<style>
@import url("../public/assets/css/app.css");
</style>
