import AppLayout from "../../../components/AppLayout";
import AddSection from "../../../components/catalog/AddSection";
import SectionList from "../../../components/catalog/SectionList";
import {useQuery} from "urql";
import {useEffect} from "react";
import useAppContext from "../../../lib/useAppContext";

const SectionsQuery = `query Sections {
  catalog_section {
    id
    name
    items {
      id
      price
      name
      description
    }
  }
}`

const CatalogPage = () => {
    const {toggleLoading} = useAppContext()
    const [{data, fetching, error}] = useQuery({query: SectionsQuery})

    useEffect(() => {
        if (!fetching) {
            toggleLoading(false)
        }
    }, [fetching])

    return <div className="px-4 space-y-6">
        {!fetching && <>
            {data['catalog_section'].map(section => <SectionList key={section.id} section={section}/>)}
            <AddSection/>
        </>}

    </div>
}

export default function Catalog() {
    return <AppLayout title="Catalog" initialLoading={true}>
        <CatalogPage/>
    </AppLayout>
}