import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ReviewAlertDialog({ isOpen, onClose, completeRef }) {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={completeRef}
      onClose={onClose}
      bgColor="white"
    >
      <AlertDialogOverlay>
        <AlertDialogContent w="80%" bgColor="white">
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            등록되었습니다
          </AlertDialogHeader>

          <AlertDialogFooter>
            <Link to="/expert/videos">
              <Button bgColor="#3F8CFF" color="white" ref={completeRef}>
                확인
              </Button>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
