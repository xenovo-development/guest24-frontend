<template>
  <section class="contact-us pd-main">
    <div class="tf-container">
      <div class="row mb-60">
        <div class="col-md-4">
          <div class="box-contact center">
            <div class="icon">
              <img src="/img/icons/destinations.png" alt="" />
            </div>
            <span>{{ $t("contact.addressLabel") }}</span>
            <p class="des">Rasimpaşa, Recaizade Sk. No:2/5</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box-contact center">
            <div class="icon">
              <img src="/img/icons/phone-green.png" alt="" />
            </div>
            <span>{{ $t("contact.phoneLabel") }}</span>
            <p class="des">0123 456 78 90</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box-contact center">
            <div class="icon">
              <img src="/img/icons/mail-green.png" alt="" />
            </div>
            <span>{{ $t("contact.emailLabel") }}</span>
            <p class="des">info@guest24.services</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="contact-us-map">
            <div class="inner-header mb-45">
              <h2 class="title">{{ $t("contact.title") }}</h2>
              <p class="des">{{ $t("contact.text") }}</p>
            </div>
            <div class="map relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.4339769365265!2d29.025126300000004!3d40.9938736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab869a44e1fab%3A0x2622b60ab7243d4c!2sXenovo!5e0!3m2!1sen!2str!4v1736935610537!5m2!1sen!2str"
                width="600"
                height="558"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="contact-us-wrap bg-4">
            <div class="inner-header mb-60">
              <h2 class="title">{{ $t("contact.titletwo") }}</h2>
              <p class="des">{{ $t("contact.texttwo") }}</p>
            </div>

            <form action="/" id="form-contact-us">
              <div class="input-wrap relative">
                <i class="icon-user-1-1"></i>
                <input type="text" :placeholder="$t('contact.name')" />
              </div>
              <div class="input-wrap relative">
                <i class="icon-Group-51"></i>
                <input type="email" :placeholder="$t('contact.email')" />
              </div>
              <div class="input-wrap relative">
                <i class="icon-content"></i>
                <textarea
                  name="text-write"
                  rows="7"
                  cols="30"
                  :placeholder="$t('contact.message')"
                ></textarea>
              </div>
              <button type="submit" class="btn-submit-contact">
                <i class="icon-Group-121"></i> {{ $t("contact.submit") }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
