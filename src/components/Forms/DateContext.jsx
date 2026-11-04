/** @format */
"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [careerWorkshopDate, setCareerWorkshopDate] = useState("");
  const [scholarshipTestDate, setScholarshipTestDate] = useState({
    onlineDate: "",
    offlineDate: "",
  });
  const [upcomingBatchesDate, setUpcomingBatchesDate] = useState({});

  const [coursePageBatchDate, setCoursePageBatchDate] = useState("");

  // Fetch dates from Firestore
  useEffect(() => {
    const fetchDates = async () => {
      try {
        const [careerSnap, scholarshipSnap, batchesSnap, coursePageSnap] = await Promise.all([
          getDoc(doc(db, "DatesForm", "careerWorkshop")),
          getDoc(doc(db, "DatesForm", "scholarshipTest")),
          getDoc(doc(db, "DatesForm", "upcomingBatches")),
          getDoc(doc(db, "DatesForm", "coursePageBatch")),
        ]);

        if (coursePageSnap.exists()) {
          setCoursePageBatchDate(coursePageSnap.data().selectedDate || "");
        }
        if (careerSnap.exists()) {
          setCareerWorkshopDate(careerSnap.data().selectedDate || "");
        }
        if (scholarshipSnap.exists()) {
          const data = scholarshipSnap.data();
          setScholarshipTestDate({
            onlineDate: data.onlineDate || "",
            offlineDate: data.offlineDate || "",
          });
        }
        if (batchesSnap.exists()) {
          const data = batchesSnap.data();
          setUpcomingBatchesDate(data);
        }
      } catch (error) {
        console.error("Error fetching dates from Firestore:", error);
      }
    };

    fetchDates();
  }, []);

  return (
    <DateContext.Provider
      value={{
        coursePageBatchDate,
        setCoursePageBatchDate,
        careerWorkshopDate,
        setCareerWorkshopDate,
        scholarshipTestDate,
        setScholarshipTestDate,
        upcomingBatchesDate,
        setUpcomingBatchesDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => useContext(DateContext);
