<template>
  <div>
    <BreadcrumbOne
      :activePageName="$t('breadcrumb.login')"
      :title="$t('breadcrumb.login')"
      backgroundUrl="/img/slider.jpg"
    />
    <Login />
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
<style>
@import url("../public/assets/css/app.css");
</style>
