<template>
  <div class="has-dashboard">
    <div class="tf-container">
      <section class="profile-dashboard">
        <div class="row">
          <div class="col-lg-3">
            <SidebarProfile />
          </div>
          <div class="col-lg-9">
            <form action="/" class="edit-profile">
              <h4 class="title">{{ $t("myprofile.myprofile") }}</h4>
              <div class="upload-image-dashboard flex mb-80">
                <span class="title-avata">{{ $t("myprofile.avatar") }}</span>
                <div class="upload-image-wrap">
                  <div class="avata relative">
                    <img
                      id="frame"
                      src="/img/page/update-profile.jpg"
                      alt="image"
                    />
                    <div class="icon-delete">
                      <i class="icon-delete-1"></i>
                    </div>
                  </div>
                  <span class="upload">{{ $t("myprofile.uploadavatar") }}</span>
                  <div class="upload-file">
                    <input type="file" />
                  </div>
                  <p>
                    {{ $t("myprofile.infoavatar") }}
                  </p>
                </div>
              </div>
              <div class="infomation-dashboard mb-70">
                <h4 class="title">{{ $t("myprofile.userinfo") }}</h4>
                <div class="widget-dash-board">
                  <div class="grid-input-2">
                    <div class="input-wrap">
                      <label>{{ $t("myprofile.name") }}</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="input-wrap">
                      <label>{{ $t("myprofile.surname") }}</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="input-wrap">
                      <label>{{ $t("myprofile.phone") }}</label>
                      <input type="tel" placeholder="" />
                    </div>
                    <div class="input-wrap">
                      <label>{{ $t("myprofile.email") }}</label>
                      <input type="email" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="infomation-dashboard mb-70">
                <h4 class="title">{{ $t("myprofile.passwordchange") }}</h4>
                <div class="widget-dash-board">
                  <div class="grid-input-2">
                    <div class="input-wrap">
                      <label>{{ $t("myprofile.newpassword") }}</label>
                      <input type="password" placeholder="" />
                    </div>
                    <div class="input-wrap">
                      <label>{{ $t("myprofile.renewpassword") }}</label>
                      <input type="password" placeholder="" />
                    </div>
                  </div>
                  <!-- <p class="mt-20">
                        {{ $t('myprofile.notepassword') }}
                      </p> -->
                </div>
              </div>
              <div class="otp-dashboard">
                <div class="flex-three">
                  <div class="button-wrap">
                    <button type="submit" class="save">
                      <i class="icon-Vector-221"></i
                      >{{ $t("myprofile.savebtn") }}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
