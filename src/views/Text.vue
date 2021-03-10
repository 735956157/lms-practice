<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-10 10:39:14
 * @LastEditors: lihao
 * @LastEditTime: 2021-03-10 11:56:11
-->
<template>
    <div class="text-box">
        <button class="download" @click="getImageBtn()">download</button>
        <div class="text" ref="text">
            <h1 class="title">标题</h1>
            <p class="part1">
                他认为，“老赖”的社会危害挺大，包括对社会风气、公序良俗的破坏特别严重。“欠债还钱，天经地义”，这是千百年来人们自觉形成并认真遵守的格律，但现在就有一部分人恣意践踏它、破坏它，不因欠钱而愧疚，反以不还为荣耀。社会上普遍流传“欠账的是爷，要账的是孙子”，一些人还在网络上不断教唆他人如何不还钱、如何逃避处罚，冲击社会道德底线。
            </p>
            <p class="part1 part2">
                “因为借贷不还，催生了要账群体，引发一些社会隐患。”尤立增说，一些个人或企业因为长期要不回欠款，采取谩骂、恐吓、毁坏财物、殴打、非法拘禁等非法手段追要或雇佣恶势力追逃，更有甚者，采取极端手段残害对方，给当事双方造成重大物质损失和精神痛苦。社会信用体系建设尚存在一些问题，民盟中央的提案提到，比如，社会信用体系方面的立法有待完善，顶层立法缺失，部门及地方立法混乱。目前，缺少信用建设的专门机构，缺乏统一的信用评价标准，尚未建立信用信息数据库，信用信息的公开度较低、公示混乱。
            </p>
            <p class="part3">
                <img class="logo" src="../assets/lmslogo.png" alt="">
                民盟中央的提案建议，协调各部门及中央、省市地方的信息平台，将分散的信用信息收集起来整合、加工、利用，从而建立个人和企业信用档案，形成大数据库。对非隐私的信用档案可以进行公开查询或者允许专业征信机构进行查询。这样社会主体在进行活动时，可以首先对交易对方的信用信息进行查询，以判断交易安全与否。全国人大代表、北京市房山区法院立案庭庭长厉莉今年关注的是矛盾纠纷多元化解，她也建议推进社会诚信体系建设，以诚信为诉源治理赋能，将合同的自动履行、调解协议的自动履行，纳入个人和机构的诚信评价体系，以引领市场主体诚信经营，提升多元解纷的权威性和终局性。民盟中央建议，应该制定一部统一适用于全国的征信法律，明确规范信用信息的概念范畴、信用体系建设的具体方式、实施机构、信用评价标准、惩治措施等，将目前政府部门制定行业或者地方的信用评价标准、惩治措施的做法变更为统一立法、由专门的信用管理机构负责，其他职能部门仅负责向专门的信用管理机构提供信用信息。
            </p>
            <div class="part4">
                <p class="part-child1">
                    尤立增也认为，国家应出台相应的政策法规，在“限制高消费和贷款”的基础上，要与失信人员本人、配偶、子女等家庭主要成员的就业、上学、各类保险的交缴等挂钩，形成系统化治理体系。“凡是恶意失信人员在失信行为未消除前，其本人及主要亲属在国家公务员、事业编招录时一律不得录入，企业招工时，涉密、涉钱等重要岗位一律不得录入；凡是政府补贴或减免的项目，一律不得享受等。”
                </p>
                <p class="part-child2">此外，民盟中央建议，指定信用建设的专门机构。目前，基于中央编办已批准设立了国家公共信用信息中心（隶属于国家发改委），可以考虑由国家公共信用信息中心来牵头，作为信用建设的专门机构，统筹全国的信用建设工作，汇总各部门的信用信息，制定信用行业的行业规范，以及进行失信惩戒等，其他职能部门予以协助配合。因此，尤立增还建议，降低恶意失信人员（老赖）的入刑门槛，使法律这一最后惩治手段，最大限度地发挥作用。</p>
                <p class="part-child3">“目前一些老赖们有持无恐，连法院生效的判决也敢拒不执行，就是认为刑法管不了他们，其他惩治措施他们根本不在乎。”尤立增说，“一些老赖就死不认账，惩戒措施他根本不在乎，‘你不让我坐高铁我就不坐’，还有一些失信人员为了不还债转移财产。”</p>
            </div>
        </div>
    </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
    data() {
        return {
            imageUrl:''
        }
    },
    methods: {
        getImageBtn() {
            html2canvas(this.$refs.text).then(canvas => {
                this.imageUrl = canvas.toDataURL('image/png')
                this.imageDownload(this.imageUrl)
            })
        },
        imageDownload(imageUrl) {
            const aLink = document.createElement('a')
            aLink.style.display = 'none'
            aLink.href = imageUrl
            aLink.download = 'text.png'
            document.body.appendChild(aLink)
            aLink.click()
            document.body.removeChild(aLink)
        }
    }
}
</script>
<style lang="scss" scoped>
    .text-box {
        width: 80%;
        margin: auto;
        .title {
            text-align: center;
        } 
        p {
            margin: 20px 0;
        }
        .part1 {
        text-indent: 50px;
        padding: 0px 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
        .part2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient:vertical;
            white-space: normal;
        }
        .part3 {
            text-indent: 50px;
            align: right;
            padding: 0px 20px;
            .logo {
                width: 80px;
                height: 60px;
                float: right;
                margin: 10px 10px;
            }
        }
        .part4 {
            display: flex;
            padding: 0px 20px;
            p {
                text-indent: 50px;
                margin-right: 30px;
            }
            .part-child1 {
                flex: 1;
            }
            .part-child2 {
                flex: 2;
            }
            .part-child3 {
                flex: 3;
                margin-right: 0;
            }
        }
    }
</style>