<template>
  <div class="col-md-4">
    <!--Card-->
    <div class="card">
        <!--Card content-->
        <div class="card-block">
            <!--Title-->
            <h4 class="card-title">{{ menu.title }}</h4>
            <!--Text-->
            <p class="card-text">{{ menu.description }}</p>
        </div>
        <!--/.Card content-->
    </div>
    <!--/.Card-->
  </div>
</template>
<script>
  export default{
    props:['menu']
  }
</script>