import AppLayout from "../../../components/AppLayout";
import PagePlaceholder from "../../../components/visual/PagePlaceholder";

const ReviewsPage = () => {
    return <PagePlaceholder title="Reviews Page" issueUrl="https://github.com/nthnluu/hollar-site/issues/5"/>
}

export default function Reviews() {
    return <AppLayout title="Reviews">
        <ReviewsPage/>
    </AppLayout>
}