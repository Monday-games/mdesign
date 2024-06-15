import { FunctionComponent } from "react";
import styles from "./Setvalues1.module.css";

export type Setvalues1Type = {
  className?: string;
};

const Setvalues1: FunctionComponent<Setvalues1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.setvalues, className].join(" ")}>
      <div className={styles.divider} />
      <div className={styles.actionLabel}>
        <div className={styles.setValuesOn}>Set values on actions</div>
      </div>
      <div className={styles.bettingRowsParent}>
        <div className={styles.bettingRows}>
          <div className={styles.optionBackgroundsParent}>
            <div className={styles.optionBackgrounds} />
            <div className={styles.runInputRow}>
              <div className={styles.run1Parent}>
                <img
                  className={styles.run1Icon}
                  loading="lazy"
                  alt=""
                  src="/1run-1.svg"
                />
                <div className={styles.runWrapper}>
                  <div className={styles.run}>run</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.extrasInputRow}>
            <div className={styles.inputNumber}>
              <div className={styles.wrapper}>
                <div className={styles.input}>
                  <div className={styles.input1}>3</div>
                  <div className={styles.inputCursor}>
                    <div className={styles.cursor} />
                  </div>
                </div>
              </div>
              <div className={styles.inputNumberHandler}>
                <div className={styles.divider1}>
                  <img
                    className={styles.lineIcon}
                    loading="lazy"
                    alt=""
                    src="/line.svg"
                  />
                </div>
                <div className={styles.handlerWrap}>
                  <div className={styles.up}>
                    <img
                      className={styles.upIcon}
                      loading="lazy"
                      alt=""
                      src="/up.svg"
                    />
                  </div>
                  <div className={styles.divider2}>
                    <img
                      className={styles.lineIcon1}
                      loading="lazy"
                      alt=""
                      src="/line-1.svg"
                    />
                  </div>
                  <div className={styles.down}>
                    <img
                      className={styles.downIcon}
                      loading="lazy"
                      alt=""
                      src="/down.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.outTypesRow}>
          <div className={styles.outTypeParent}>
            <div className={styles.outType} />
            <div className={styles.outValuesRow}>
              <div className={styles.run1Group}>
                <img
                  className={styles.run1Icon1}
                  loading="lazy"
                  alt=""
                  src="/2run-1.svg"
                />
                <div className={styles.runsWrapper}>
                  <div className={styles.runs}>runs</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber1}>
            <input className={styles.input2} placeholder="3" type="text" />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameWrapper}>
              <div className={styles.fourParent}>
                <img
                  className={styles.fourIcon}
                  loading="lazy"
                  alt=""
                  src="/four@2x.png"
                />
                <div className={styles.runsContainer}>
                  <div className={styles.runs1}>runs</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber2}>
            <input className={styles.input3} placeholder="3" type="text" />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameDiv}>
              <div className={styles.sixParent}>
                <img
                  className={styles.sixIcon}
                  loading="lazy"
                  alt=""
                  src="/six@2x.png"
                />
                <div className={styles.runsFrame}>
                  <div className={styles.runs2}>runs</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber3}>
            <input className={styles.input4} placeholder="3" type="text" />
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.frameWrapper1}>
              <div className={styles.boldParent}>
                <img
                  className={styles.boldIcon}
                  loading="lazy"
                  alt=""
                  src="/bold@2x.png"
                />
                <div className={styles.boldWrapper}>
                  <div className={styles.bold}>Bold</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber4}>
            <input className={styles.input5} placeholder="3" type="text" />
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameWrapper2}>
              <div className={styles.runoutParent}>
                <img
                  className={styles.runoutIcon}
                  loading="lazy"
                  alt=""
                  src="/runout@2x.png"
                />
                <div className={styles.runoutWrapper}>
                  <div className={styles.runout}>Runout</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber5}>
            <input className={styles.input6} placeholder="3" type="text" />
          </div>
        </div>
      </div>
      <div className={styles.frameParent4}>
        <div className={styles.frameParent5}>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <div className={styles.frameWrapper3}>
              <div className={styles.catchoutParent}>
                <img
                  className={styles.catchoutIcon}
                  loading="lazy"
                  alt=""
                  src="/catchout@2x.png"
                />
                <div className={styles.catchoutWrapper}>
                  <div className={styles.catchout}>Catchout</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber6}>
            <input className={styles.input7} placeholder="3" type="text" />
          </div>
        </div>
        <div className={styles.frameParent6}>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild2} />
            <div className={styles.frameWrapper4}>
              <div className={styles.stumppingParent}>
                <img
                  className={styles.stumppingIcon}
                  loading="lazy"
                  alt=""
                  src="/stumpping@2x.png"
                />
                <div className={styles.stumpingWrapper}>
                  <div className={styles.stumping}>Stumping</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber7}>
            <input className={styles.input8} placeholder="3" type="text" />
          </div>
        </div>
      </div>
      <div className={styles.frameParent7}>
        <div className={styles.frameParent8}>
          <div className={styles.frameParent9}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild3} />
              <div className={styles.wideballCount}>
                <div className={styles.wideballParent}>
                  <img
                    className={styles.wideballIcon}
                    loading="lazy"
                    alt=""
                    src="/wideball@2x.png"
                  />
                  <div className={styles.wideballIndicator}>
                    <div className={styles.wideBall}>Wide ball</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputNumber8}>
              <input className={styles.input9} placeholder="3" type="text" />
            </div>
          </div>
          <div className={styles.frameParent10}>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild4} />
              <div className={styles.frameWrapper5}>
                <div className={styles.noballParent}>
                  <img
                    className={styles.noballIcon}
                    loading="lazy"
                    alt=""
                    src="/noball@2x.png"
                  />
                  <div className={styles.noballLabel}>
                    <div className={styles.noBall}>No ball</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputNumber9}>
              <input className={styles.input10} placeholder="3" type="text" />
            </div>
          </div>
        </div>
        <div className={styles.frameParent11}>
          <div className={styles.frameParent12}>
            <div className={styles.outIconParent}>
              <div className={styles.outIcon} />
              <div className={styles.frameWrapper6}>
                <div className={styles.lbwParent}>
                  <img className={styles.lbwIcon} alt="" src="/lbw@2x.png" />
                  <div className={styles.lbwLabel}>
                    <div className={styles.lbw}>LBW</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputNumber10}>
              <input className={styles.input11} placeholder="3" type="text" />
            </div>
          </div>
          <div className={styles.frameParent13}>
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild5} />
              <div className={styles.frameWrapper7}>
                <div className={styles.dotballParent}>
                  <img
                    className={styles.dotballIcon}
                    alt=""
                    src="/dotball@2x.png"
                  />
                  <div className={styles.dotballLabel}>
                    <div className={styles.dotBall}>Dot ball</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputNumber11}>
              <input className={styles.input12} placeholder="3" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent14}>
        <div className={styles.frameParent15}>
          <div className={styles.frameParent16}>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild6} />
              <div className={styles.noball4runWrapper}>
                <div className={styles.noball4run}>
                  <img
                    className={styles.noballIcon1}
                    loading="lazy"
                    alt=""
                    src="/noball-1@2x.png"
                  />
                  <img
                    className={styles.fourIcon1}
                    loading="lazy"
                    alt=""
                    src="/four-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.inputNumber12}>
              <input className={styles.input13} placeholder="3" type="text" />
            </div>
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild7} />
              <div className={styles.wideball4runsWrapper}>
                <div className={styles.wideball4runs}>
                  <img
                    className={styles.wideIcon}
                    loading="lazy"
                    alt=""
                    src="/wide@2x.png"
                  />
                  <img
                    className={styles.fourIcon2}
                    loading="lazy"
                    alt=""
                    src="/four-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.inputNumber13}>
              <div className={styles.input14}>
                <div className={styles.input15}>3</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent18}>
          <div className={styles.rectangleParent8}>
            <div className={styles.frameChild8} />
            <div className={styles.noball6runWrapper}>
              <div className={styles.noball6run}>
                <img
                  className={styles.noballIcon2}
                  loading="lazy"
                  alt=""
                  src="/noball-2@2x.png"
                />
                <img
                  className={styles.sixIcon1}
                  loading="lazy"
                  alt=""
                  src="/six-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.inputNumber14}>
            <input className={styles.input16} placeholder="3" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setvalues1;
