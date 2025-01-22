<template>
  <div>
    <BreadcrumbOne
      :activePageName="$t('breadcrumb.aboutus')"
      :title="$t('breadcrumb.aboutus')"
      backgroundUrl="/img/slider.jpg"
    />
    <AboutOne />
    <!-- <WidgetServices />
    <CtaOne /> -->
    <WidgetIgPost />
    <HomeCta />
  </div>
</template>
<script>
export default {
  name: "AboutPage",
};
</script>
<style>
@import url("../public/assets/css/app.css");
</style>
