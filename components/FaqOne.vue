<template>
  <section class="inner-faq">
    <div class="tf-container">
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <div class="accordion faq-list" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {{ $t("faq[0].question") }}
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse relative show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  {{ $t("faq[0].answer") }}
                </div>
                <div class="icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="accordion faq-list" id="accordionExample2">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  {{ $t("faq[1].question") }}
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse relative show"
                data-bs-parent="#accordionExample2"
              >
                <div class="accordion-body">
                  {{ $t("faq[1].answer") }}
                </div>
                <div class="icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="accordion faq-list" id="accordionExample3">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {{ $t("faq[2].question") }}
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse relative"
                data-bs-parent="#accordionExample3"
              >
                <div class="accordion-body">
                  {{ $t("faq[2].answer") }}
                </div>
                <div class="icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="accordion faq-list" id="accordionExample4">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFore"
                  aria-expanded="false"
                  aria-controls="collapseFore"
                >
                  {{ $t("faq[3].question") }}
                </button>
              </h2>
              <div
                id="collapseFore"
                class="accordion-collapse collapse relative"
                data-bs-parent="#accordionExample4"
              >
                <div class="accordion-body">
                  {{ $t("faq[3].answer") }}
                </div>
                <div class="icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="accordion faq-list" id="accordionExample5">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  {{ $t("faq[4].question") }}
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse relative"
                data-bs-parent="#accordionExample5"
              >
                <div class="accordion-body">
                  {{ $t("faq[4].answer") }}
                </div>
                <div class="icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.accordion-button {
  border: none;
  background-color: transparent;
}

.accordion-button:not(.collapsed) {
  border: none;
}

.accordion-button:hover,
.accordion-button:focus {
  background-color: transparent;
  outline: none;
  box-shadow: none;
}

.accordion-item {
  border: none;
}
</style>
