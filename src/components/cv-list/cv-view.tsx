import { Modal } from "@/components/ui/modal";
import { userCvsView } from "@/services/user-cvs";
import { CvViewProps, UserCvsEntity } from "@/entities/user-cvs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CvView = ({ publicUid, onClose }: CvViewProps & { onClose: () => void }) => {
    const [cv, setCv] = useState<UserCvsEntity | null>(null);

    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const fetchCv = async () => {
            setIsLoading(true);
            const response = await userCvsView({ publicUid: publicUid });
            if (response.success) {
                setCv(response.data);
                setIsLoading(false);
            } else {
                setIsLoading(false);
                toast.error(response.error || 'Failed to fetch data');
            }
        }
        fetchCv();
    }, [publicUid]);

    return (
        <Modal isOpen={true} onClose={onClose} className="max-w-[700px] p-6 lg:p-10">
        <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
            {isLoading ? (
                <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
                </div>
            ) : (
                <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
                    <div className="flex flex-col gap-2">
                        <h1>{cv?.nama}</h1>
                        <p>{cv?.phone}</p>
                        <p>{cv?.tglLahir}</p>
                        <p>{cv?.tinggiBadan}</p>
                        <p>{cv?.beratBadan}</p>
                        <p>{cv?.statusMenikah}</p>
                        <p>{cv?.suku}</p>
                        <p>{cv?.targetMenikah}</p>
                        <p>{cv?.merokok}</p>
                        <p>{cv?.panjangJilbab}</p>
                        <p>{cv?.pekerjaan}</p>
                        <p>{cv?.hobi}</p>
                        <p>{cv?.karakterDanSifat}</p>
                        <p>{cv?.kelompokNgaji}</p>
                        <p>{cv?.kriteriaDomisili}</p>
                        <p>{cv?.kriteriaLainnya}</p>
                    </div>
                </div>
            )}
        </div>
        </Modal>
    );
};

export default CvView;