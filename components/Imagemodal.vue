<template>
  <div
    class="modal fade"
    tabindex="-1"
    :id="'imgModalOpen' + src[imageKey]?.imageTitle"
  >
    <div class="modal-dialog modal-xl" style="width: 90% !important">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Dijital Hedef</h5>

          <!--begin::Close-->
          <div
            class="btn btn-icon btn-sm btn-active-light-danger ms-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr018.svg-->
            <span class="svg-icon svg-icon-muted svg-icon-2hx"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H21C21.6 2 22 2.4 22 3V21C22 21.6 21.6 22 21 22ZM18 12C18 11.4 17.6 11 17 11H7C6.4 11 6 11.4 6 12C6 12.6 6.4 13 7 13H17C17.6 13 18 12.6 18 12Z"
                  fill="black"
                /></svg
            ></span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <div class="modal-body">
          <img
            :src="src[imageKey]?.image"
            :alt="src[imageKey]?.imageAlt"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
    imageKey: Number,
  },
};
</script>
