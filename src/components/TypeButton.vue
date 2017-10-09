<script>
  import Button from './BaseButton.vue'
  export default{
    name: "type-button",
     //将传递过来的type在props中注册，并进行验证
    props: {
      type: {
        validator: function (typeStr) {
          if (typeof typeStr === 'string') {
            switch (typeStr) {
              case 'defaul':
              case 'primary':
              case 'info':
              case 'success':
              case 'warning':
              case 'danger':
                return true;
              default:
                return false;
            }
          } else return false;
        }
      },
      size: {
        validator: function (sizeStr) {
          if (typeof sizeStr === 'string') {
            switch(sizeStr){
              case'sm':
              case'md':
              case'lg':
              case'fullwidth':
                return true;
              default:
                return false;
            }
          }else return false;
        }
      }
    },
    render(createElement){
      return createElement(Button,
        {
          class: [this.type,this.size],
          on:{
              click:this.click
          }
        },
        this.$slots.default
      )
    },
    methods: {
        click(){
            this.$emit('click')
        }
    },
    components: {}
  };
</script>
<style scoped >
</style>