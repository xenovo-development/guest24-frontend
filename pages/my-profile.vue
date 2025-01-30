<template>
  <div>
    <BreadcrumbOne
      :activePageName="$t('breadcrumb.myprofile')"
      :title="$t('breadcrumb.myprofile')"
      backgroundUrl="/img/slider.jpg"
    />
    <MyProfile />
  </div>
</template>
<script>
export default {
  name: "MyProfile",
};
</script>
<style>
@import url("../public/assets/css/app.css");
</style>
