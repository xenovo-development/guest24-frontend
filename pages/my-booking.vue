<template>
  <div>
    <BreadcrumbOne
      :activePageName="$t('breadcrumb.myprofile')"
      :title="$t('breadcrumb.myprofile')"
      backgroundUrl="/img/slider.jpg"
    />
    <MyBooking />
  </div>
</template>
<script>
export default {
  name: "MyBooking",
};
</script>
<style>
@import url("../public/assets/css/app.css");
</style>
