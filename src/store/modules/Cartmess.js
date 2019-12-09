import {getCartMessSort} from '@/services/index'

let state={
    desclist: {},   // 元数据
    current: '全部',    // 当前选择年份 
    year: ['全部'],     // 所有的年份
    currentList: [],    // 当前年份的车款数据 
   
}

// 给车款排序
function sortCarList(list){
    // 排序规则 排量升序 && 功率升序 && 自然吸气>涡轮增压
    list.sort((a, b)=>{
        if (a.exhaust_str == b.exhaust_str){
            if (a.max_power_str == b.max_power_str){
                return b.inhale_type > a.inhale_type;
            }else{
                return a.max_power - b.max_power;
            }
        }else{
            return a.exhaust - b.exhaust;
        }
    })
    return list;
}

// 格式化数据
function formatCarList(list){
    // 拼接每款车的key 排量/功率 吸气方式
 list = list.map(item=>{
        item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
        return item;
    })
    let newList = [];
    
    // 遍历，根据key把数据聚合一下
    list.forEach(item=>{//目标元素位置
        let index = newList.findIndex(value=>value.key == item.key);
        if (index !== -1){
            newList[index].list.push(item);
        }else{
            newList.push({
                key: item.key,
                list: [item]
            })
        }
    })
    return newList;
}


let mutations={
     updateDesclist(state,payload){
        if(payload.code==1){
            state.desclist = payload.data
            /** 处理数据 */
            // 1.拿到年份
            let year = payload.data.list.map(item=>item.market_attribute.year);
            state.year = [...new Set(state.year.concat([...new Set(year)]))];;
            // 2.拿到当前选择年份的数据
            let currentList = [];
            console.log(state.current,"======")
            if (state.current == '全部'){
               currentList = payload.data.list;
            }else{
              currentList = payload.data.list.filter(item=>item.market_attribute.year == state.current);
            }

            // 3.给当前年份数据排序
            currentList = sortCarList(currentList);

            // 4.聚合key相同的车款数据
            currentList = formatCarList(currentList);
            state.currentList = currentList;
            console.log('currentList...', currentList);
        }else{
            alert(payload.msg)
        }
    },
    backRoll(state,payload){
        state.current=payload;
    }
  
}

let actions={
   async getCartMessSort({commit},id){
       let res = await getCartMessSort(id)
       if(res.code===1){
        commit("updateDesclist",res)
       }
    }
   
    

}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}