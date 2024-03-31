import { useState, useEffect } from "react";
import Prayer from "./Prayer";
import fajr from "../assets/fajr-prayer.png";
import dhuhr from "../assets/dhhr-prayer-mosque.png";
import asr from "../assets/asr-prayer-mosque.png";
import maghrib from "../assets/sunset-prayer-mosque.png";
import isha from "../assets/night-prayer-mosque.png";
import axios from "axios";
import moment from "moment";
import "moment/dist/locale/ar-ma";

const MainContent = () => {
  // states
  const [nextPrayerIndex, setNextPrayerIndex] = useState(2);
  const [remainingTime, setRemainingTime] = useState("");

  const [timings, setTimings] = useState({});
  const [selectedApiName, setSelectedApiName] = useState();
  const [selectedDisplayName, setSelectedDisplayName] =
    useState("الدار البيضاء");
  const [today, setToday] = useState(moment().format("MMM Do YYYY | h:mm "));

  // Array of options
  const cities = [
    { value: "casablanca", key: "الدار البيضاء" },
    { value: "agadir", key: "أكادير" },
    { value: "asfi", key: "أسفي" },
    { value: "azemmour", key: "آزمور" },
    { value: "azrou", key: "أزرو" },
    { value: "beni mellal", key: "بني ملال" },
    { value: "berkane", key: "بركان" },
    { value: "berrechid", key: "برشيد" },
    { value: "boujdour", key: "بوجدور" },
    { value: "bouskoura", key: "بوسكورة" },
    { value: "chefchaouen", key: "شفشاون" },
    { value: "dakhla", key: "الداخلة" },
    { value: "eljadida", key: "الجديدة" },
    { value: "errachidia", key: "الرشيدية" },
    { value: "essaouira", key: "الصويرة" },
    { value: "fes", key: "فاس" },
    { value: "figuig", key: "فكيك" },
    { value: "guelmim", key: "كلميم" },
    { value: "guercif", key: "جرسيف" },
    { value: "ifrane", key: "إفران" },
    { value: "kenitra", key: "القنيطرة" },
    { value: "khemisset", key: "خميسات" },
    { value: "khenifra", key: "خنيفرة" },
    { value: "khouribga", key: "خريبكة" },
    { value: "laayoune", key: "العيون" },
    { value: "larache", key: "العرائش" },
    { value: "marrakech", key: "مراكش" },
    { value: "meknes", key: "مكناس" },
    { value: "mohammedia", key: "المحمدية" },
    { value: "nador", key: "الناظور" },
    { value: "ouarzazate", key: "ورزازات" },
    { value: "oujda", key: "وجدة" },
    { value: "rabat", key: "الرباط" },
    { value: "safi", key: "آسفي" },
    { value: "salé", key: "سلا" },
    { value: "settat", key: "سطات" },
    { value: "sidi kacem", key: "سيدي قاسم" },
    { value: "tanger", key: "طنجة" },
    { value: "taroudant", key: "تارودانت" },
    { value: "temara", key: "تمارة" },
    { value: "tetouan", key: "تطوان" },
    { value: "sidi_bennour", key: "سيدي بنور" },
    { value: "tiznit", key: "تزنيت" },
    { value: "zagora", key: "زاكورة" },
    { value: "ouchda", key: "وشدة" },
    { value: "beni_ansar", key: "بني أنصار" },
    { value: "tahla", key: "تاهلة" },
    { value: "sidi_rzin", key: "سيدي رزين" },
    { value: "tafraout", key: "تافراوت" },
    { value: "taza", key: "تازة" },
    { value: "taliouine", key: "تالوين" },
    { value: "sidi_ifni", key: "سيدي إفني" },
  ];
  const prayersArray = [
    { key: "Fajr", displayName: "الفجر" },
    { key: "Dhuhr", displayName: "الظهر" },
    { key: "Asr", displayName: "العصر" },
    { key: "Sunset", displayName: "المغرب" },
    { key: "Isha", displayName: "العشاء" },
  ];
  // fetch data
  const getTimings = async () => {
    const response = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?country=MA&city=${selectedApiName}`
    );
    setTimings(response.data.data.timings);
  };

  useEffect(() => {
    getTimings();
    const t = moment();
    setToday(t.format("MMM Do YYYY | h:mm "));
  }, [selectedApiName]);

  useEffect(() => {
    let interval = setInterval(() => {
      setupCountdownTimer();
    }, 1000);

    const t = moment();
    setToday(t.format("MMM Do YYYY | h:mm"));

    return () => {
      clearInterval(interval);
    };
  }, [timings]);

  const setupCountdownTimer = () => {
    const momentNow = moment();

    let prayerIndex = 2;

    if (
      momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
    ) {
      prayerIndex = 1;
    } else if (
      momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
    ) {
      prayerIndex = 2;
    } else if (
      momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Sunset"], "hh:mm"))
    ) {
      prayerIndex = 3;
    } else if (
      momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
    ) {
      prayerIndex = 4;
    } else {
      prayerIndex = 0;
    }

    setNextPrayerIndex(prayerIndex);

    const nextPrayerObject = prayersArray[prayerIndex];
    const nextPrayerTime = timings[nextPrayerObject.key];
    const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");

    let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

    if (remainingTime < 0) {
      const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
      const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
        moment("00:00:00", "hh:mm:ss")
      );

      const totalDiffernce = midnightDiff + fajrToMidnightDiff;

      remainingTime = totalDiffernce;
    }

    const durationRemainingTime = moment.duration(remainingTime);

    setRemainingTime(
      `${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}`
    );
  };

  return (
    <div className="flex flex-col w-full mt-6 font-ar">
      {/* first row */}
      <div className="flex justify-around bg-slate-100 w-full">
        <div>
          <h2> {today}</h2>
          <h1 className="text-3xl font-bold">{selectedDisplayName}</h1>
        </div>

        <div>
          <h2>متبقي حتى صلاة {prayersArray[nextPrayerIndex].displayName}</h2>
          <h1 className="text-3xl font-bold">{remainingTime}</h1>
        </div>
      </div>
      {/* divider */}
      <div className="border border-b-4 border-blue-700 m-4" />
      {/* prayers cards */}
      <div className="bg-bklack flex gap-4 justify-center flex-wrap mb-9 ">
        <Prayer salat="الفجر" time={timings.Fajr} img={fajr} />
        <Prayer salat="الظهر" time={timings.Dhuhr} img={dhuhr} />
        <Prayer salat="العصر" time={timings.Asr} img={asr} />
        <Prayer salat="المغرب" time={timings.Sunset} img={maghrib} />
        <Prayer salat="العشاء" time={timings.Isha} img={isha} />
      </div>
      {/* select country */}

      <form className="max-w-sm mx-auto ">
        <select
          onChange={(e) => {
            const selectedIndex = e.target.selectedIndex;
            const selectedOption = e.target.options[selectedIndex];
            const selectedKey = selectedOption.getAttribute("data-key");
            setSelectedApiName(e.target.value);
            setSelectedDisplayName(selectedKey);
          }}
          id="countries"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            المدينة
          </option>
          {/* Mapping through the array of options */}
          {cities.map((city) => (
            <option key={city.value} value={city.value} data-key={city.key}>
              {city.key}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default MainContent;
