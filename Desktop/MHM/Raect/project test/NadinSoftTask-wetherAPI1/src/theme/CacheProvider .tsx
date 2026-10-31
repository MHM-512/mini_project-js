import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function CacheProvider() {
    const { i18n } = useTranslation();
    const isRtl = i18n.language === "fa";
    return <Box
        dir={isRtl ? "rtl" : "ltr"}
    >
    </Box>
}