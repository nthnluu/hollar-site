import AppLayout from "../../../components/AppLayout";
import AddSection from "../../../components/catalog/AddSection";

const CatalogPage = () => {
    return <div className="px-4 space-y-6">
        <AddSection/>

    </div>
}

export default function Catalog() {
    return <AppLayout title="Catalog">
        <CatalogPage/>
    </AppLayout>
}