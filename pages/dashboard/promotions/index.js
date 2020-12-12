import AppLayout from "../../../components/AppLayout";
import PagePlaceholder from "../../../components/visual/PagePlaceholder";

const PromotionsPage = () => {
    return <PagePlaceholder title="Promotions Page" issueUrl="https://github.com/nthnluu/hollar-site/issues/4"/>
}

export default function Promotions() {
    return <AppLayout title="Promotions">
        <PromotionsPage/>
    </AppLayout>
}