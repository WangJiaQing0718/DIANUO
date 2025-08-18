import ButtomBar from "@/component/ButtomBar"
import HeadSection from "@/component/HeadSection"
import NavBar from "@/component/NavBar"
import './index.scss'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getJobDetail } from "@/store/modules/jobDetailStore"
import { useParams } from "react-router-dom"


const JobDetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { jobDetail } = useSelector(state => state.jobDetail);

    useEffect(() => {
        if (id) {
            dispatch(getJobDetail(id));
        }
    }, [dispatch, id]);

    if (!jobDetail) {
        return <div>加载中...</div>;
    }

    // console.log("jobDetail:", jobDetail);

    return (
        <div>
            <div><NavBar /></div>
            <div>
                <HeadSection
                    headTitle="人才招聘"
                    enHeadTitle="HR"
                    imageUrl="http://nas.wjq718.fun:10001/imageFiles/opd7nm5qik4j8vfw.jpg"
                />
            </div>


            <div className="jobdetail_Container">
                <div className="jobdetail_Content">
                    <div>
                        <div className="jobdetail_GridLayout">
                            <div id="jobname">{jobDetail.position_name}</div>
                            <div id="jobsalary">{jobDetail.position_salary}</div>
                        </div>

                        <div className="jobdetail_Text">
                            <div>岗位职责：</div>
                            {
                                jobDetail.position_statement.statement.map((item, index) => (
                                    <div>{index+1}、{item.description}；</div>
                                ))
                            }
                        </div>

                        <div className="jobdetail_Text">
                            <div>任职要求：</div>
                            {
                                jobDetail.position_requirement.requirement.map((item, index) => (
                                    <div>{index+1}、{item.description}；</div>
                                ))
                            }
                        </div>

                        <div className="jobdetail_Text">
                            <div>公司福利：</div>
                            {
                                jobDetail.firm_welfare.welfare.map((item, index) => (
                                    <div>{index+1}、{item.description}；</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div><ButtomBar /></div>
        </div>
    )
}

export default JobDetail;