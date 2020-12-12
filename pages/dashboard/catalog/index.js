import AppLayout from "../../../components/AppLayout";
import PagePlaceholder from "../../../components/visual/PagePlaceholder";

const CatalogPage = () => {
    return <PagePlaceholder title="Catalog Page" issueUrl="https://github.com/nthnluu/hollar-site/issues/3"/>
}

export default function Catalog() {
    return <AppLayout title="Catalog">
        <CatalogPage/>
    </AppLayout>
}