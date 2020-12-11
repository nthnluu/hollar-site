import {useState, useEffect, useContext} from 'react';
import fb from "./firebase-config";
import SessionContext from "./SessionContext";
import PageContext from "./PageContext";

// A hook that adds a listener on the current Firebase session
export default function useSession() {
    const pageContext = useContext(PageContext)
    return pageContext
}