<template>
  <section class="our-blog pd-main">
    <div class="tf-container">
      <div class="row">
        <div class="col-lg-8 col-12">
          <div
            class="side-blog mb-56px"
            data-aos="fade-up"
            v-for="blog in paginatedBlogs"
            :key="blog.id"
          >
            <div class="blog-image">
              <div class="list-categories">
                <a href="#" class="new">{{ formatDate(blog.publish_date) }}</a>
              </div>
              <NuxtLink :to="localePath(`/blogs/${blog.slug}`)">
                <img :src="blog.img" :alt="blog.title" />
              </NuxtLink>
            </div>
            <div class="blog-content">
              <div class="top-detail-info">
                <ul class="flex-three">
                  <li>
                    <i class="icon-4"></i>
                    <span>{{ formatDateYear(blog.publish_date) }}</span>
                  </li>
                  <li>
                    <i class="icon-user"></i>
                    <a href="#">{{ blog.author }}</a>
                  </li>
                  <li>
                    <i class="icon-24"></i>
                    <span class="date">3 min Read</span>
                  </li>
                </ul>
              </div>
              <h3 class="entry-title">
                <NuxtLink :to="localePath(`/blogs/${blog.slug}`)">
                  {{ blog.title }}
                </NuxtLink>
              </h3>
              <div
                class="blog-content"
                v-html="blogContentToFirstParagraph(blog.content)"
              ></div>
              <div class="button-main">
                <NuxtLink
                  :to="localePath(`/blogs/${blog.slug}`)"
                  class="button-link"
                >
                  Read More <i class="icon-Arrow-11"></i>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <ul class="tf-pagination flex-five mt-20">
                <li
                  v-for="page in totalPages"
                  :key="page"
                  :class="{ active: page === currentPage }"
                  class="pages-link"
                >
                  <a
                    href="#"
                    class="page-link"
                    @click.prevent="changePage(page)"
                  >
                    {{ page }}
                  </a>
                </li>
              </ul>
            </div>
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
import { ref, computed, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

const { setLocale, locale } = useI18n();

const blogs = ref([]);
const currentPage = ref(1);
const blogsPerPage = 4;

function setLanguage(language) {
  setLocale(language);
  locale.value = language;
  localStorage.setItem("language", language);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString(
    locale.value === "tr" ? "tr-TR" : "en-US",
    {
      month: "short",
      day: "2-digit",
    }
  );
}
function formatDateYear(date) {
  return new Date(date).toLocaleDateString(
    locale.value === "tr" ? "tr-TR" : "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );
}
const getBlogs = async () => {
  try {
    const language = locale.value || "tr";
    const apiUrl = `http://blog.guest24.services/api/blogs?lang=${language}`;

    const response = await fetch(apiUrl);

    if (!response.ok) throw new Error("API yanıtı başarısız.");

    const data = await response.json();

    blogs.value = data
      .map((blog) => {
        const localizedContent = blog[language] || blog["en"];

        return {
          id: localizedContent.id,
          title:
            localizedContent.title !== "No Title"
              ? localizedContent.title
              : blog["en"].title,
          content:
            localizedContent.content !== "No Content"
              ? localizedContent.content
              : blog["en"].content,
          img: localizedContent.img,
          publish_date: localizedContent.publish_date,
          slug: localizedContent.slug,
          author: localizedContent.author,
        };
      })
      .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
  } catch (error) {
    console.error("Blogları çekerken hata oluştu:", error);
  }
};

const paginatedBlogs = computed(() => {
  const startIndex = (currentPage.value - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  return blogs.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
  return Math.ceil(blogs.value.length / blogsPerPage);
});

function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

onMounted(() => {
  getBlogs();
});

function blogContentToFirstParagraph(content) {
  if (!content) return "<p></p>";
  const firstParagraph = content.split("\n")[0];
  return `<p>${firstParagraph}</p>`;
}
</script>
