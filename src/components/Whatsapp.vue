<template>
  <div class="whatsapp">
    <a
      id="tooltip-whatsapp"
      href="https://wa.me/972547006453?text=Hello !"
      target="_blank"
    >
      <div>
        <i class="fab fa-whatsapp fa-3x"></i>
      </div>
    </a>
    <b-tooltip target="tooltip-whatsapp" triggers="hover" placement="left">
      {{ $t("whatsapp.info") }}
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: "WhatsApp"
};
</script>

<style scoped lang="scss">
a {
  z-index: 5;
  right: 10px;
  width: 50px;
  bottom: 10px;
  height: 50px;
  padding: 10px;
  color: #ffff;
  position: fixed;
  font-size: 10px;
  border-radius: 50%;
  text-decoration: none;
  background-color: #25d366;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);

  &:hover {
    color: #ffff;
    box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.7);
  }
}
</style>
