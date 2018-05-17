<template>
  <div class="content_box">
    
    <Table  :columns="columns" :data="data"></Table>
    <!-- <Page class="pageInfo"
			@on-change="pageShow"
			:total="total" 
			:page-size="pageSize" 
			:current='currentPage' 
			show-elevator 
		></Page> -->
  </div>
</template>

<script>
import LineChart from '../components/LineChart'
import axios from "axios";

export default {
  name: 'dashboard-admin',
  components: {
    LineChart
  },
  data() {
    return {
      columns: [
        {
            title: '用户名',
            key: 'user_name'
        },
        {
            title: '商品图片',
            align: "center",
            key: 'img',
            render: (h, params) => {
                return h("span" , [
                    h("img" , {
                        props: {
                            
                        },
                        attrs:{
                            src : params.row.img,
                        },
                        style: {
                            height :"30px",
                        }
                    })
                ])
            }
        },
        {
            title: '商品名称',
            key: 'goods_name'
        },
        {
            title: '尺码',
            key: 'size'
        },
        {
            title: '商品价格',
            key: 'price'
        },
        {
            title: '商品数量',
            key: 'count'
        },
        {
            title: '操作',
            key: 'mark',
            width: 200,
            align: 'center',
            className: "mark_info",
            render: (h, params) => {
                console.log(params)
                return h('span', [
                    h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        style: {
                            backgroundColor: "#2d8cf0",
                            color:"#eee"
                        },
                        on :{
                            click: () =>{
                                this.sendShop(params.row._id)
                            }
                        }
                    }, '发货')
                ]);
            }
        }
      ],
      data: [],
      iosc: 0,
      androidC: 0,
      total: 1,
			currentPage: 1,
			pageSize: 10
    }
  },
  methods: {
    getList () {
        let pageNo = parseInt(this.currentPage) - 1;
        axios.get(`http://localhost:3000/api/admin_buyList`).then(d => {
            console.log(d)
            const data = d.data
            let list = [];
            for (let order of data) {
                order.img = 'http://localhost:3000' + order.img.substr(4,order.img.length) 
                list.push(order);
            }           
            this.data = list;
		})
    },
    sendShop(id) {
        axios.post(`http://localhost:3000/api/send`, { id: id}).then(d => {
            alert('发货成功');
            this.getList();
		})
    },
    pageShow(d){
			this.currentPage = d;
			this.getList();
		},
  },
  mounted(){
		this.getList();
	}
}
</script>

<style scoped>

    .content_box {
        padding: 20px;
    }
    .lineChartTable {
        margin-bottom: 20px;
    }

    .tableTitle {
        padding: 0 80px;
        font-size: 20px;
        line-height: 46px;
    }

    .tableStyle {
        margin: 0 80px 30px;
    }
    .pageInfo {
        margin-top: 50px;
        text-align: center;
        margin-bottom: 50px;
    }

    .fl {
        float: left
    }
    .fr_2 {
        float: right;
        margin-right: 20px;
    }

    .clearfix::after {
        content: ".";
        clear: both;
        display: block;
        overflow: hidden;
        font-size: 0;
        height: 0;
    }

    .clearfix {
        zoom: 1;
    }
    .successColor {
        color: #19be6b;
    }
    .darkPrimary {
        color: #2b85e4;
    }
    i {
        font-style: normal;
        text-decoration: none;
    }

    .right_20 {
        margin-right: 20px;
    }
</style>
