<template>
    <div>
      <BreadcrumbOne
      :activePageName="$t('breadcrumb.signup')"
      :title="$t('breadcrumb.signup')"
      backgroundUrl="/img/slider.jpg"
    />
      <Signup />
    </div>
  </template>
  <script>
export default {
  name: "Signup",
};
</script>
  <style>
  @import url("../public/assets/css/app.css");
  </style>
  