DROP TABLE TBL_LIKE;

CREATE TABLE TBL_LIKE(
    LIKE_FEED_FNO NUMBER(10) NOT NULL ,
    LIKE_ID_LIST VARCHAR2(2000),

    CONSTRAINT LIKE_FEED_FNO FOREIGN KEY (LIKE_FEED_FNO) REFERENCES TBL_FEED(FEED_PNO) ON DELETE CASCADE
);