<template>
  <div class="about">
    <Me />
    <StackList />
    <Experiences />
    <Reference class="mt-5" />
  </div>
</template>

<script>
import Me from "@/components/Me";
import Experiences from "@/components/Experiences";
import StackList from "@/components/StackList";
import Reference from "@/components/Reference";

export default {
  name: "About",

  components: {
    Me,
    Experiences,
    StackList,
    Reference
  }
};
</script>

<style lang="scss" scoped></style>
