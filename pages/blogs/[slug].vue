<template>
  <BreadcrumbOne
    activePageName="Blog Detail"
    title="Blog Detail"
    backgroundUrl="/img/slider.jpg"
  />
  <section class="our-blog pd-main">
    <div class="tf-container">
      <div class="row">
        <div class="col-lg-8 col-12">
          <article class="side-blog side-blog-single" v-if="blog">
            <div class="image">
              <img :src="blog.img" :alt="blog.title" />
            </div>
            <div class="top-detail-info">
              <ul class="flex-three">
                <li>
                  <i class="icon-4"></i>
                  <span>{{ formatDate(blog.publish_date) }}</span>
                </li>
                <li>
                  <i class="icon-user"></i>
                  <a href="#">{{ blog.author }}</a>
                </li>
                <li>
                  <i class="icon-24"></i>
                  <span>3 min Read</span>
                </li>
              </ul>
            </div>
            <h2 class="entry-title">{{ blog.title }}</h2>
            <p class="des lh-32 mb-37" v-html="blog.content"></p>
          </article>

          <div v-else>
            <p>Loading...</p>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <BlogsSidebar />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const route = useRoute();
const blog = ref(null);

const getBlogDetails = async () => {
  try {
    const slug = route.params.slug;
    const language = locale.value || "tr";
    const apiUrl = `http://blog.guest24.services/api/blog-details/${slug}?lang=${language}`;

    const response = await fetch(apiUrl);

    if (!response.ok) throw new Error("Blog detayı alınamadı.");

    const data = await response.json();

    const blogData = data[0]?.[language] || null;

    if (!blogData) throw new Error("Blog içeriği bulunamadı.");

    blog.value = {
      id: blogData.id,
      title: blogData.title !== "No Title" ? blogData.title : "Untitled",
      content:
        blogData.content !== "No Content Available"
          ? blogData.content
          : "No content available.",
      img: blogData.img,
      publish_date: blogData.publish_date,
      author: blogData.author,
    };
  } catch (error) {
    console.error("Blog detayı çekilirken hata oluştu:", error);
  }
};

function formatDate(date) {
  return new Date(date).toLocaleDateString(
    locale.value === "tr" ? "tr-TR" : "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );
}

onMounted(() => {
  getBlogDetails();
});
</script>
