Vue.component("search",{
    template:
    `
    <form method="get" id="main_a_serach" >
    <div class="Search_nav" id="selectsearch">
      <a href="javascript:;" @click.prevent="search(1)">餐厅</a>
      <a href="javascript:;" @click.prevent="search(2)">食物名</a>
    </div>
    <div class="Search_area">
      <input type="search" id="fkeyword"  placeholder="请输入您所需查找的餐厅名称或食物名称..." class="searchbox"
        v-model="name" />
      <input type="submit" class="searchbutton" value="搜 索" @click.prevent="selectsearch()" />
    </div>
  </form>

    `,
    data:function(){
        return{
            keyword:1,
            name:"",
        }
    },
    methods:{
        search:function(status){
            this.keyword = status
            this.$parent.search(this.keyword);
        },
        selectsearch:function(){
        
            this.$parent.selectsearch(this.keyword,this.name);
        }
    }
})